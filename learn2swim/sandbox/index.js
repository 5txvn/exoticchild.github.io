const translate = require('@iamtraction/google-translate');

const codes = ["af", "sq", "am"]

codes.forEach(code => {
    translate("orange", { from: "en", to: code }).then(res => {
        console.log(res.text)
    })
})