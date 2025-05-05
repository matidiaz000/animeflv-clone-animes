import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ANIME_LIST } from "../queries/animes.list";
import { useState } from "react";
import { urls } from "../constants/urls";
import CardList from "../components/CardList";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import { setVariables } from "../utilities/setVariables";

const Animes = () => {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const getSort = urls.find(d => d.url === category)?.sort;

  const { loading, error, data, fetchMore } = useQuery(GET_ANIME_LIST, {
    fetchPolicy: 'cache-and-network',
    variables: setVariables({
      getSort: getSort,
      currentPage: currentPage,
      category: category
    }),
  });

  const loadMore = (page: number) => {
    if (data?.Page?.pageInfo.hasNextPage) {
      setCurrentPage(page)
      fetchMore({
        variables: setVariables({
          getSort: getSort,
          currentPage: currentPage,
          category: category
        })
      });
    }
  };

  return (
    <article className="container-md pb-5">
      <Header />
      <CardList
        data={data?.Page?.media}
        loading={loading}
        error={error}
      />
      { !loading && !error && data ?
        <Pagination
          currentPage={currentPage}
          pageInfo={data?.Page?.pageInfo}
          next={() => loadMore(currentPage + 1)}
          prev={() => loadMore(currentPage - 1)}
        />
      : null}
    </article>
  );
};

export default Animes;
