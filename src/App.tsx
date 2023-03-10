import React from "react";
import Card from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepos";
import { useFavoriteReposStore } from "./store/favoriteRepos";

function App() {
  const { data, isLoading} = useFetchRepositories('LucasMJuarez');
  const { favoriteReposIds } = useFavoriteReposStore();

  if (isLoading) return <div>Loading...</div>;

  console.log(data);
  return (
    <div>
      {data?.map((repo) => (
        <Card repository={repo} 
        key={repo.id}
        isFavorite={favoriteReposIds.includes(repo.id)}/>
      ))}
    </div>
  );
}

export default App;
