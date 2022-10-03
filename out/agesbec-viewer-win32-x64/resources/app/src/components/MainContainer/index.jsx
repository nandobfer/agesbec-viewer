import './style.scss';

export const MainContainer = ({children}) => {
    
    return (
        <div className="background">
            <div className="main-container">
                {children}
            </div>
        </div>
    )
}