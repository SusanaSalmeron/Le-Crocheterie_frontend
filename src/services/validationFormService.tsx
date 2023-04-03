import * as yup from 'yup'

export function ValidationContactForm() {
    let formSchema = yup.object().shape({
        name: yup.string()
            .required("Name is required")
            .min(3, 'Min character is 3'),
        topic: yup.string()
            .required()
            .oneOf(["Order", "Support", "General"])
            .label("Choose subject"),
        content: yup.string()
            .required()
            .min(30, 'Min character is 50'),
        email: yup.string()
            .required("Email is required")
            .email("Email not valid")
    })
    return formSchema
}