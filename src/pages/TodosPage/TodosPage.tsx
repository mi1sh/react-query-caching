import { PageWrapper } from "../PageWrapper.styles.ts";
import { useQuery, useQueryClient } from "react-query";
import { Todo } from '../../types.ts';
import { TodoCard } from './TodosPage.styles.ts';
import {ChangeEvent} from 'react';

const fetchTodos = async () => {
    const response = await fetch(`https://dummyjson.com/todos?limit=6`);
    if (!response.ok) {
        throw new Error('Error fetching todos');
    }
    console.log(response);
    return response.json();
};

export const TodosPage = () => {
    const queryClient = useQueryClient();
    const { data: todosData, isLoading, isError } = useQuery<Todo[]>(['todos'], fetchTodos, {
        staleTime: Infinity,
        keepPreviousData: true,
    });

    const handleCheckboxChange = (id: string, event: ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;

        queryClient.setQueryData(['todos'], (oldData) => {
            if (!oldData) return oldData;
            return {
                ...oldData,
                todos: oldData.todos.map(todo =>
                    todo.id === id ? { ...todo, completed: isChecked } : todo
                ),
            };
        });
    };

    if (isLoading) {
        return <PageWrapper><p>Loading...</p></PageWrapper>;
    }

    if (isError || !todosData) {
        return <PageWrapper><p style={{color: 'red'}}>Error fetching todos</p></PageWrapper>;
    }

    return (
        <PageWrapper>
            <h3 style={{ marginTop: 100 }}>My todos:</h3>
            <ul>
                {todosData.todos.map((todo) => (
                    <TodoCard key={todo.id}>
                        <input type='checkbox' onChange={(event) => handleCheckboxChange(todo.id, event)} defaultChecked={todo.completed}></input>
                        <p>{todo.todo}</p>
                    </TodoCard>
                ))}
            </ul>
        </PageWrapper>
    );
};