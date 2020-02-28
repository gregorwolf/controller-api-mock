const express = require('express')
const app = express()
const port = 3000

var users = 
{
    "users": [
        {

            "metadata": {
                "guid": "d7448ab8-3a25-4263-9010-c7bf46ddbc28",
                "url": "https://hxehost:30030/v2/users/d7448ab8-3a25-4263-9010-c7bf46ddbc28",
                "created_at": "1563827457574",
                "updated_at": "1571133286714"
            },
            "userEntity": {
                "uaaGuid": "157715",
                "username": "XSA_ADMIN",
                "origin": "",
                "active": true
            }
        
        },
        {
            "metadata": {
                "guid": "fb8a3f99-6d74-4569-8b0a-4f9ecb43cb2c",
                "url": "https://hxehost:30030/v2/users/fb8a3f99-6d74-4569-8b0a-4f9ecb43cb2c",
                "created_at": "1563833009296",
                "updated_at": "1571063238389"
            },
            "userEntity": {
                "uaaGuid": "172864",
                "username": "GWOLF",
                "origin": "",
                "active": true
            }
        }
    ],
    "pagination": {
        "total_results": 1,
        "total_pages": 1
    }
}


app.get('/v2/users', (req, res) => res.json(users))

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`))