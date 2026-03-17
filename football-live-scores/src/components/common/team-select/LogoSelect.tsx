import "./LogoSelect.css"

interface LogoSelectProps {
    label: string;
    logo: string;
}

export default function LogoSelect({ label, logo }: LogoSelectProps) {

    return (
        <>
            <div className="logo">
                <img src={logo} alt="" width={20} />
                <span>{label}</span>
            </div>
        </>
    )
}