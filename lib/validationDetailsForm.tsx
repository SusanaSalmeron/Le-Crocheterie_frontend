import * as yup from "yup"

export default function ValidationForDetailsForm() {
    let formSchema = yup.object().shape({
        colors: yup.string()
            .required("Please, choose a color"),
        sizes: yup.string()
            .required("Please, choose a size"),
    })
    return formSchema
}