import React from "react";
import { StyledRegisterVideo } from "./style";

function useForm(props) {
    const [ values, setValues ] = React.useState(props.initialValues)
    return {
        values,
        handleChange: (e) => {  
            const value = e.target.value
            const name = e.target.name
            setValues({...values, [name]: value})
            
        },
        clearForm() {
            setValues( {
                titulo: "",
                url: "",
            } )
        }
    }
}

export default function RegisterVideo() {
    const formCadastro = useForm({
    initialValues: {titulo: "", url: ""}
 });

const [ formVisivel, setFormVisivel ] = React.useState(true)

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel && (
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setFormVisivel(false)
                    formCadastro.clearForm();
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                            X
                        </button>

                        <input placeholder="Título do vídeo" required name="titulo" value={formCadastro.values.titulo} onChange={formCadastro.handleChange}
                        />
                        
                        <input placeholder="URL exemplo: http://youtube.com/8E8JR8ER" name="url" required value={formCadastro.values.url} onChange={formCadastro.handleChange}
                        
                        />

                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            )}
           
        </StyledRegisterVideo>
    )
}