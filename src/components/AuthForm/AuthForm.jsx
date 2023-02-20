import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import CheckBoxInput from "../../common/CheckBoxInput";
import { useAuth, useAuthActions } from "../../context/Provider/Auth/AuthProvider";
import { useQuery } from "../../hooks/useQuery";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const initialValues = {
  email: "",
  password: "",
  accept: false,
};

const validationSchema = Yup.object({
  email: Yup.string().email("ایمیل نامعتبر است").required("ایمیل خالی است"),
  password: Yup.string().required("رمز عبور خالی هست"),
  accept: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});
const AuthForm = () => {
  const navigate = useNavigate();
  const setAuth = useAuthActions();
  const auth = useAuth();
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  const onSubmit = (values) => {
    localStorage.setItem("authState", JSON.stringify(values));
    setAuth(values);
    navigate(redirect);
    toast.success("با موفقیت وارد شدید :)");
  };

  useEffect(() => {
    if (auth) navigate(redirect);
  }, [redirect, auth]);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <section className="h-screen">
      <div className="flex justify-center items-center h-full">
        <form
          className="w-11/12 md:w-2/5 lg:w-2/6 flex justify-center items-center
         flex-col bg-white shadow-md rounded-md py-4 px-3"
          onSubmit={formik.handleSubmit}
        >
          <div className="w-full text-center">
            <h2 className="text-xl font-bold text-blue-500">ورود و ثبت نام</h2>
          </div>
          <Input
            formik={formik}
            name="email"
            label="ایمیل"
            type="email"
            placeholder="ایمیل خود را وارد کنید"
          />
          <Input
            formik={formik}
            name="password"
            label="رمز عبور"
            type="password"
            placeholder="رمز عبور خود را وارد کنید"
          />
          <CheckBoxInput
            formik={formik}
            name="accept"
            label="قوانین را می پذیرم!"
          />
          <button
            type="submit"
            disabled={!formik.isValid}
            className="w-full mt-3 bg-blue-500 text-white py-3 shadow-md shadow-blue-500 rounded-md disabled:bg-blue-200 disabled:shadow-none"
          >
            ورود و ثبت نام
          </button>
        </form>
      </div>
    </section>
  );
};

export default AuthForm;
