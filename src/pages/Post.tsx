import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RepositoryIssues } from "../components/RepositoryIssues";
import { repositoriesContext } from "../context/AllRepositoriesContext";

export const Post = () => {
  const [repositoryData, setRepositoryData] = useState(null);
  const useRepositoriesContext = useContext(repositoriesContext);
  const { allRepositories } = useRepositoriesContext;

  let { repositoryName } = useParams();

  useEffect(() => {
    fetch(
      `https://api.github.com/repos/matheus-augusto-silva/${repositoryName}/issues`
    )
      .then(response => response.json())
      .then(data => setRepositoryData(data));
  }, [repositoryName]);

  console.log("repositoryData", repositoryData);

  const actualRepository = allRepositories?.find(
    repository => repository.name === repositoryName
  );

  return (
    actualRepository && <RepositoryIssues repositoryData={repositoryData} />
  );
};
