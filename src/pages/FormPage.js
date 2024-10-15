import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import Controls from '../commons/controls'
import FormicFormComponent from '../Components/FormicFormComponent'
import theme from '../Utilities/Theme'

const FormPage = () => {
    return (
        <>
            <NavbarComponent />
            <Controls.Grid container mt={3}>
            <Controls.Grid item xs={12} md={6} sx={{ backgroundColor: theme.palette.one.fields, margin: "auto", height: { xs: "auto" }, width: { xs: '1000px', sm: "850px", md: "800px", lg: "700px" } }} px={3} py={5}   >
                <FormicFormComponent />
            </Controls.Grid>
            </Controls.Grid>

        </>
    )
}

export default FormPage