import fs from 'fs';
export function routes(req, res) {
    if (req.url == "/add") {
        res.write('<html><body><form Action ="/items" method="POST"><input type="text" name="Item"><button>Submit</button></form></body> </html>');
        res.end();
    }
    if (req.url === '/items' && req.method === 'POST') {
        const body = [];
        req.on('data', (data) => {
            body.push(data);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const itemName = parsedBody.split('=')[1];
            console.log(itemName);
            fs.writeFile('items.txt', itemName, (err) => {
                res.write('Items List');
                res.end();
            });
        });
    }
}
