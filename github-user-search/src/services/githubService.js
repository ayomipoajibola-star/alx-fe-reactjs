import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users?q";

export const fetchAdvancedUsers = async (
  username,
  location,
  minRepos,
  page = 1
) => {
  let query = "";

  if (username) {
    query += username;
  }

  if (location) {
    query += ` location:${location}`;
  }

  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  try {
    const response = await axios.get(
      `${GITHUB_API_URL}?q=${query}&page=${page}&per_page=10`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
