export default async function deleteTeamMember(memberId: string){
    if(confirm("Are you sure you want to delete this team member?")){
        try{
            await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/team/${memberId}`, {
                method: "DELETE"
            })
            return Promise.resolve()
        }catch(err){
            console.error(err)
            return Promise.reject(err)
        }
    }
}