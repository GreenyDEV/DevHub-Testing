const stockSW = "/uv/sw.js";
const swAllowedHostnames = ["localhost", "127.0.0.1"];
  if (!navigator.serviceWorker) {
    if (
      location.protocol !== "https:" &&
      !swAllowedHostnames.includes(location.hostname)
    )
      alert("Service workers cannot be registered without https. Therefore, DevHub will NOT work.");

    alert("Your browser doesn't support service workers. Therefore, DevHub will NOT work.");
  }

  navigator.serviceWorker.register(stockSW, {
    scope: __uv$config.prefix,
  });