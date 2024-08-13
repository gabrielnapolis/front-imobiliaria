"use client";
import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const schema = yup
    .object({
      email: yup.string().required().email().label("Email"),
      password: yup.string().required().label("Password"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const onSubmit = (data: FormData) => {
    const notify = () =>
      toast("Login successfully", { position: "top-center" });
    notify();
    reset();
  };

  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section
        className="vh-100 gradient-custom"
        style={{
          backgroundImage: "url('assets/images/bg-login.svg')",
        }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-white">Zucheratto</h2>
                    <p className="text-white-50 mb-5">
                      Digite seu e-mail e senha!
                    </p>

                    <div
                      data-mdb-input-init
                      className="form-outline form-white mb-4"
                    >
                      <input
                        className="form-control form-control-lg"
                        placeholder="E-mail"
                        {...register("email")}
                      />
                    </div>

                    <div
                      data-mdb-input-init
                      className="form-outline form-white mb-4"
                    >
                      <input
                        className="form-control form-control-lg"
                        placeholder="Senha"
                        {...register("password")}
                      />
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn-two w-100 text-uppercase d-block mt-20"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};


