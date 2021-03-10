export type Repository = {
  id: number;
  stargazers_count: number;
  full_name: string;
  owner: {
    login: string;
  };
  clone_url: string;
}
