async function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Suyash" });
    }, 2000);
  });
}

const  data = await fetchUser()

if (data) {
    console.log("User fetched successfully",data);
    
}