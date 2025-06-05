let stars = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let constellations = ["Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
function findConstellaOfStar(starName)
{
    for (let i = 0; i < stars.length; i++)
    {
        if (starName === stars[i])
        {
            return "Ngôi sao " + starName + " thuộc chòm sao " +constellations[i];
        }
        else if (starName = constellations[i])
            return "Chòm sao " + starName + " thuộc ngôi sao " + stars[i];
    }
    alert("Không có ngôi sao hoặc chòm sao nào tồn tại"); 
}


document.write(findConstellaOfStar(prompt("Nhập tên ngôi sao hoặc chòm sao muốn kiểm tra")));