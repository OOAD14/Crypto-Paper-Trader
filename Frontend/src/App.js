import {NextUIProvider} from "@nextui-org/react";
import BasicRoutes from "./routes/BasicRoutes";
import { AuthProvider } from "./contexts/AuthContext"

function App() {
    return (
        <NextUIProvider>
            <AuthProvider>
                <BasicRoutes />
            </AuthProvider>
        </NextUIProvider>
    );
}

export default App;
