import DashBoardComponent, { DashBoardComponentProps } from "./DashBoardComponent"

const DashBoardSignIn=()=>{
    const values: DashBoardComponentProps = {
        componentName: "Sign In",
        fields: [{
            FieldName: "Sign-In Email",
            Value: "ashya@gmail.com",
            placeholder:"Email"
        },
        {
            FieldName:"SignIn Password",
            Value:"*****",
            placeholder:"password"
        },
        {
            FieldName:"Two Factor Authentication",
            Value:"off"
        },
        {
            FieldName:"Linked Accounts",
            Value:"ggs"
        }
        ]
    }
    return <div>
        <DashBoardComponent componentName={values.componentName} fields={values.fields} />
    </div>
}
export default DashBoardSignIn