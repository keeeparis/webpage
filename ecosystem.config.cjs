module.exports = {
  apps: [
    {
      name: "seesaw-front",
      cwd: "/var/www/seesaw-front", // must have absolute path
      script: "npm",
      args: "start",
      // watch: true,
      // ignore_watch: ['node_modules'],
      // restart_delay: 10_000,
      env: {
        NODE_ENV: "production",
        HOST: "127.0.0.1",
        PORT: 3000
      }
    }
  ]
};
