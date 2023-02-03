import styled from "styled-components";
import { FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup
    .string()
    .matches(/^[a-zA-Z\s]*$/, "Name should contain only letter and space")
    .required("Name is required"),
  email: yup.string().email("Invalid Email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <MainForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} placeholder="Name*" />
        <small>{errors.name?.message}</small>
        <input type="email" {...register("email")} placeholder="Email*" />
        <small>{errors.email?.message}</small>
        <input type="text" {...register("subject")} placeholder="Subject*" />
        <small>{errors.subject?.message}</small>
        <textarea {...register("message")} placeholder="Message*"></textarea>
        <small>{errors.message?.message}</small>
        <button className="main-btn" type="submit">
          Send <FaPaperPlane />
        </button>
      </form>
    </MainForm>
  );
};

export default ContactForm;

const MainForm = styled.div`
  form {
    width: 100%;
    padding: 30px;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    input,
    textarea {
      width: 100%;
      background-color: transparent;
      border: none;
      color: ${(props) => props.theme.txtColor};
      border-bottom: 2px solid ${(props) => props.theme.txtColor};

      &:focus {
        outline: none;
      }
    }
    textarea {
      width: 100%;
      height: 100px;
    }
    small {
      display: block;
      margin-bottom: 40px;
      color: red;
    }
  }
  .main-btn {
    svg {
      font-size: 16px;
      margin-left: 10px;
      position: relative;
      top: -1px;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;
