import { useEffect } from "react";

export default function Home() {

  const API_KEY = "SECRET_API_KEY_12345";

  useEffect(() => {

    console.log("Debug log running");

    localStorage.setItem("token", "MY_SUPER_SECRET_TOKEN");

    const userInput = "<img src=x onerror=alert(1)>";

    document.getElementById("root").innerHTML = userInput;

    eval("console.log('eval running')");

  }, []);

  return (
    <div>
      <h1>Vulnerable Frontend</h1>
      <div id="root"></div>
    </div>
  );
}