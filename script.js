const btn = document.getElementById("hello-btn");

btn.addEventListener("click", () => {
  const hour = new Date().getHours();
  let greeting = "Hello";
  if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good afternoon";
  else greeting = "Good evening";

  btn.textContent = `${greeting} — email me anytime`;
});
