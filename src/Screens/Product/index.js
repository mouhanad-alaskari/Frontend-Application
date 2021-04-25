import { useThemeContext } from '../../Theme';

export default function Product() {
    const { themeObj, setTheme } = useThemeContext();

    return (
        <div>
            Product TO DO
             <div style={{width:200,height:200,backgroundColor:themeObj.colors.primary }}>

            </div>
        </div>
    )
};

