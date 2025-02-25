import React from "react";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Login = () => {
  const [login, setLogIn] = useState({ email: "", password: "" });
  const [init, setInit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div>
      {init && (
        <Particles
          className="absolute inset-0 z-0" // Set a lower z-index
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#101121",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 50,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
      <section className="flex flex-col items-center dark:text-white justify-center relative z-10 top-50">
        {" "}
        <h1 className="text-4xl font-semibold dark">LogIn</h1>
        <form
          className="container items-center mt-10 flex flex-col dark:bg-gray-800 w-100 border border-black rounded-lg p-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-75 mt-2">
            <label className="text-l font-semibold">Email:</label>
            <input
              type="text"
              value={login.email}
              onChange={(e) => setLogIn({ ...login, email: e.target.value })}
              className="border rounded-lg bg-amber-50 p-1 text-l text-black dark:bg-neutral-500 dark:text-white border-black mt-5"
            />
          </div>
          <div className="flex flex-col w-75 mt-2">
            <label className="text-l font-semibold">Password:</label>
            <input
              type="password"
              onChange={(e) => setLogIn({ ...login, password: e.target.value })}
              className="border rounded-lg bg-amber-50 p-1 text-l text-black dark:bg-neutral-500 dark:text-white border-black mt-5"
            />
          </div>
          <button className="bg-amber-50 rounded-lg mt-8 text-lg hover:animate-bounce dark:bg-neutral-600 p-1 w-50">
            login
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
