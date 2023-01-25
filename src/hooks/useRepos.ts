import api from "../api/github";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { Repository } from "./types";

async function fetchRepos(cxt: QueryFunctionContext) {
  const [_, githubUser] = cxt.queryKey; // ['repos', 'LucasMJuarez'
  const { data } = await api.get<Repository[]>(`/users/${githubUser}/repos`);
  return data;
}

export function useFetchRepositories(githubUser: string) {
  return useQuery(["repos", githubUser], fetchRepos);
}
