import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../lib/axios";

interface RepositoriesContextType {
  allRepositories: any[];
}

const repositoriesContext = createContext<RepositoriesContextType>(
  {} as RepositoriesContextType
);

const RepositoriesProvider = ({ children }: { children: ReactNode }) => {
  const [allRepositories, setAllRepositories] = useState([]);

  useEffect(() => {
    api.get("users/Matheus-Augusto-Silva/repos").then(response => {
      setAllRepositories(response.data);
    });
  }, []);

  return (
    <repositoriesContext.Provider
      value={{
        allRepositories,
      }}
    >
      {children}
    </repositoriesContext.Provider>
  );
};

export { repositoriesContext, RepositoriesProvider };
