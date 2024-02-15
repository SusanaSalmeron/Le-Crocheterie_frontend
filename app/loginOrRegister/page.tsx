"use client"
import "../../styles/loginOrRegister.css"
import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "./tabs";
import MainLayout from "../../components/mainLayout";
import { Formik, Form, Field } from 'formik'
import { register } from "../../lib/users";

interface LogInitialValues {
    email: string,
    password: string
}

interface RegInitialValues {
    name: string,
    lastName: string,
    userEmail: string,
    regPassword: string,
    repeatPassword: string
}

const logInitialValues: LogInitialValues = {
    email: "",
    password: ""
}
const regInitialValues: RegInitialValues = {
    name: "",
    lastName: "",
    userEmail: "",
    regPassword: "",
    repeatPassword: ""
}

function LoginOrRegister() {
    return (
        <MainLayout>
            <div className="container">
                <div className="info">
                    <h2>Please, sign to access your account or fill out the form to create yours.
                    </h2>
                </div>
                <div className="wrapper">
                    <Tabs>
                        <TabList aria-label="tabs">
                            <Tab to="/">SIGN IN</Tab>
                            <Tab to="/register">REGISTER</Tab>
                        </TabList>
                        <div className="panels">
                            <TabPanel>
                                <Outlet />
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>
        </MainLayout>
    );
}

const submitLogin = (values: LogInitialValues) => {
    alert(JSON.stringify(values))
}

const submitRegister = async (values: RegInitialValues) => {
    const result = await register(values)
    if (result) {
        return alert('ok')
    } else {
        return alert('No')
    }
}

function Login() {
    return (
        <div className="loginForm" data-testid="loginForm">
            <Formik
                initialValues={logInitialValues}
                onSubmit={submitLogin}>
                <Form className="logform">
                    <div className="userMail">
                        <label>Email</label>
                        <Field type="text" name="email">
                        </Field>
                    </div>
                    <div className="logPassword">
                        <label>Password</label>
                        <Field type="password" name="password">
                        </Field>
                    </div>
                    <div className="logButton">
                        <button type="submit">LOGIN</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

function Register() {
    return (
        <div className="registerForm" data-testid="registerForm">
            <Formik
                initialValues={regInitialValues}
                onSubmit={submitRegister}>
                <Form className="regform">
                    <div className="userName">
                        <label>Name</label>
                        <Field type="text" name="name">
                        </Field>
                    </div>
                    <div className="userLastName">
                        <label>Last Name</label>
                        <Field type="text" name="lastName">
                        </Field>
                    </div>
                    <div className="regEmail">
                        <label>Email</label>
                        <Field type="text" name="userEmail">
                        </Field>
                    </div>
                    <div className="regPassword">
                        <label>Password</label>
                        <Field type="password" name="regPassword">
                        </Field>
                    </div>
                    <div className="repeatPassword">
                        <label>Repeat Password</label>
                        <Field type="password" name="repeatPassword">
                        </Field>
                    </div>
                    <div className="regButton">
                        <button type="submit">REGISTER</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}



export default function TabsRoutes() {
    return (
        // We're using MemoryRouter for demonstration purposes. But you can use
        // BrowserRouter, HashRouter, etc. depending on your needs.
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<LoginOrRegister />}>
                    <Route index element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
            </Routes>
        </MemoryRouter>
    );
}