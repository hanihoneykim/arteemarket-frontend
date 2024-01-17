interface IProtectedPageProps {
    children: React.ReactNode;
}

export default function ProtectedPage({ children }:IProtectedPageProps) {
    return (
        <>
            {children}
        </>
    )
}