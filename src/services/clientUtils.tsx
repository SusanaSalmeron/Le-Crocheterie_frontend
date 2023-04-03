import Swal from 'sweetalert2'

export const getAuthHeaders = () => {
    return {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.REACT_APP_API_KEY
        }
    }
}

export const popUpAlert = async (position: any, icon: any, title: string, showConfirmButton: boolean, timer: number) => {
    await Swal.fire({
        position: position,
        icon: icon,
        title: title,
        showConfirmButton: showConfirmButton,
        timer: timer
    })
}