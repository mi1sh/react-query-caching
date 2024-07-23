import { PageWrapper } from "./PageWrapper.styles";
import { Gallery } from "../types";
import { useQuery } from "react-query";

const fetchPhotos = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=3`);
  console.log(response);
  if (!response.ok) {
      throw new Error('Error fetching photos');
  }
  return response.json();
};

export const GalleryPage = () => {
  const { data: galleryData, isError } = useQuery(['photos'], fetchPhotos, {
    staleTime: Infinity, 
    keepPreviousData: true,
  });

  if (isError || !galleryData) {
    return <PageWrapper><p>Error fetching photos</p></PageWrapper>;
  }

  return (
    <PageWrapper>
      <h3 style={{ marginTop: 100 }}>My gallery:</h3>
      <ul>
        {galleryData.map((photo: Gallery) => (
          <li key={photo.id}>
            <img alt={photo.title} src={photo.url} />
            <p>{photo.title}</p>
            <hr />
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
};