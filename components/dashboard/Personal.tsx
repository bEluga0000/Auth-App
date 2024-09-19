import DashBoardComponent, { DashBoardComponentProps } from "./DashBoardComponent"

const Personal = ()=>{
    const values:DashBoardComponentProps ={
        componentName:"Personal",
        fields:[{
            FieldName:"Phone Number",
            placeholder:"9999999999"
        },
        
    ]
    } 
    return <div>
        <DashBoardComponent componentName={values.componentName} fields={values.fields}/>
    </div>
}
export default Personal