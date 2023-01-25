import React from "react";
import { Repository } from "../hooks/types";
import { useFavoriteReposStore } from "../store/favoriteRepos";

type CardProps = {
  repository: Repository;
  isFavorite: boolean;
};

function Card({ repository: repo, isFavorite }: CardProps) {
  const addFavoriteRepo = useFavoriteReposStore(
    (state) => state.addFavoriteRepo
  );
  const removeFavoriteRepo = useFavoriteReposStore(
    (state) => state.removeFavoriteRepo
  );
  return (
    <div>
      <h3>{repo.name}</h3>
      <button>{isFavorite ? "dislike" : "like"}</button>
    </div>
  );
}

export default Card;
