"use client";

import { ComponentType, useEffect } from "react";
import { useRouter } from "next/navigation";

const WithAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
    const AuthComponent = (props: P) => {
        const router = useRouter();

        useEffect(() => {
            const token = sessionStorage.getItem("token");

            if (!token) {
                router.push("/login");
            }
        }, [router]);

        return <WrappedComponent {...props} />;
    };

    AuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

    return AuthComponent;
};

export default WithAuth;
