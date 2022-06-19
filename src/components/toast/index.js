import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ClearAlert } from "../../store/common/commonService";

export default function Toast() {
    const dispatch = useDispatch();
    let { alert, message, type, duration } = useSelector((state) => state.alert);

    useEffect(() => {
        if (alert) {
            switch (type) {
                case 'success':
                    toast.success(message);
                    break;

                case 'error':
                    toast.error(message);
                    break;

                case 'warning':
                    toast.warning(message);
                    break;

                case 'info':
                    toast.info(message);
                    break;

                default:
                    toast(message);
                    break;
            }

            setTimeout(() => {
                dispatch(ClearAlert());
            }, duration)
        }
    }, [alert])

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={duration}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={'colored'}
            />
        </>
    )
}