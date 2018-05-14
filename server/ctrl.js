module.exports = {
    getItems: (req, res) => {
        console.log(req.params)
        const db = req.app.get('db')

        db.get_prods({shelfnum: req.params.shelfnum}).then(data => {
            res.status(200).send(data)
        } )
    },
    getBin: (req, res) => {
        const db = req.app.get('db')
        const { shelf, bin } = req.params
        console.log(shelf, bin)
        db.get_bin({shelf, bin}).then(data => {
            console.log(data[0])
            res.status(200).send(data[0])
        }).catch(err => console.error(err))
    },
    editItem:(req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.edit_prods({id: req.params.id}).then(() => res.status(200).send())
    },
    delItem: (req, res) => {
        const db = req.app.get('db')
        var {name, price, img } = req.body
        const {id} = req.params

        db.edit_prods({id}).then(data => {
            db.get_prods().then(data => {
                res.status(200).send(data)
            } )
        } )
    },
    addItem: (req, res) => {
        const db = req.app.get('db')
        var {name, price, img } = req.body
        console.log("body " + req.body)
        const {shelf, bin}= req.params
        console.log("pBody " + req.params)

        db.make_prods(
            name, price, img, shelf, bin
        ).then(data => {
            res.status(200).send(data)
            }
        ).catch(err => console.error(err))
    }
}