import React, { useContext } from "react";

import { SearchRepositoriesContainer } from "./styled";

import { useForm } from "react-hook-form";
import { repositoriesContext } from "../../context/AllRepositoriesContext";

interface allRepositoriesProps {
  findText: string;
  setFindText: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchRepositories = ({
  findText,
  setFindText,
}: allRepositoriesProps) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const useRepositoriesContext = useContext(repositoriesContext);

  const { allRepositories } = useRepositoriesContext;

  return (
    <SearchRepositoriesContainer>
      <div className="search-repositories-title">
        <h1>Repositórios</h1>
        <span>
          <span>{allRepositories?.length}</span> Repositórios
        </span>
      </div>
      <form>
        <input
          type="text"
          placeholder="Pesquisar repositórios"
          {...register("findText")}
          onChange={e => setFindText(e.target.value)}
        />
      </form>
    </SearchRepositoriesContainer>
  );
};
