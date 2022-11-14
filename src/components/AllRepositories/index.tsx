import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { repositoriesContext } from "../../context/AllRepositoriesContext";
import { SearchRepositories } from "../SearchRepositories";
import { AllRepositoriesContainer, RepositoryContainer } from "./styled";

export const AllRepositories = () => {
  const [findText, setFindText] = React.useState("");

  const useRepositoriesContext = useContext(repositoriesContext);

  const { allRepositories } = useRepositoriesContext;

  const allRepositoriesFiltered = allRepositories?.map(repository => {
    if (findText === "") {
      return repository;
    } else if (
      findText !== "" &&
      repository.name.toLowerCase().includes(findText.toLowerCase())
    ) {
      return repository;
    } else {
      return null;
    }
  });

  return (
    <>
      <SearchRepositories findText={findText} setFindText={setFindText} />
      <AllRepositoriesContainer>
        {allRepositoriesFiltered?.map(
          repository =>
            repository && (
              <RepositoryContainer key={repository?.name}>
                <NavLink to={`/posts/${repository.name}`}>
                  <div className="repository-title">
                    <h1>{repository?.name}</h1>
                  </div>
                  <div className="repository-description">
                    <span>Description:</span> <>{repository?.description}</>
                  </div>
                  <div className="repository-owner">
                    <span>Owner:</span> <>{repository?.owner.login}</>
                  </div>
                  <div className="repository-date">
                    <span>Pushed_at: </span> <>{repository?.pushed_at}</>
                  </div>
                </NavLink>
              </RepositoryContainer>
            )
        )}
      </AllRepositoriesContainer>
    </>
  );
};
