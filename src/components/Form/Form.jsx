import FormContainer from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const formSchema = yup.object().shape({
    userName: yup
      .string()
      .max(18, "Precisa ter 18 letras")
      .required("Obrigatorio"),
    fullName: yup.string().required("Obrigatorio"),
    email: yup
      .string()
      .email("insira email valido")
      .required("email Obrigatorio"),
    confirmacaoEmail: yup
      .string()
      .email("E-mail inválido")
      .oneOf([yup.ref("email")], "o email não é igual"),
    senha: yup
      .string("PRECISA SER NUMERO")
      .required("senha Obrigatorio")
      .matches(
        "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z])",
        "Precisa ter Maiuscula, Minuscula, simbolo, numero"
      ),
    confirmacaoSenha: yup
      .string("PRECISA SER NUMERO")
      .required("senha Obrigatorio")
      .oneOf([yup.ref("senha")], "senha diferente"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitFunction(eve) {
    console.log(eve);
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitFunction)}>
      <input placeholder="Nome de usuário" {...register("userName")} />
      {errors.userName?.message}
      <input placeholder="Nome completo" {...register("fullName")} />
      {errors.fullName?.message}
      <input placeholder="Endereço de Email" {...register("email")} />
      {errors.email?.message}
      <input
        placeholder="Confirme seu Email"
        {...register("confirmacaoEmail")}
      />
      {errors.confirmacaoEmail?.message}
      <div>
        <input placeholder="Senha" type={"password"} {...register("senha")} />
        <input
          placeholder=" Confirme sua senha"
          type={"password"}
          {...register("confirmacaoSenha")}
        />
        {errors.senha?.message}
      </div>
      <div>
        <input type={"checkbox"} id="termos" {...register("termos")} />
        <label htmlFor="termos">Eu aceito os termos de uso da aplicação</label>
      </div>
      <button type="submit">CADASTRAR</button>
    </FormContainer>
  );
};

export default Form;
