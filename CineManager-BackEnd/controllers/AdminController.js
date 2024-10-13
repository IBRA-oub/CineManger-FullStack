import AdminService from "../services/Admin.service.js";
class AdminController {
    constructor() {
        this.AdminService = new AdminService();
    }

    getAllAdmin = async (req, res) => {
        this.AdminService.getAllAdmin()
            .then(admins => {
                res.status(200).json(admins);
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    };

    createAdmin = async (req, res) => {
        const { nom, email, password } = req.body;

        this.AdminService.createAdmin(nom, email, password)
            .then(user => {
                res.status(201).json(user);
            })
            .catch(err => {
                res.status(400).json({ message: err.message });
            });
    };

    getAdmin = async (req, res) => {
        const id = req.params.id;

        this.AdminService.getAdmin(id)
            .then(admin => {
                res.status(200).json(admin);
            })
            .catch(err => {
                res.status(404).json({ message: err.message });
            });
    };

    updateAdmin = async (req, res) => {
        const id = req.params.id;
        const data = req.body;

        this.AdminService.updateAdmin(id, data)
            .then(updatedAdmin => {
                res.status(200).json(updatedAdmin);
            })
            .catch(err => {
                res.status(404).json({ message: err.message });
            });
    };

    deleteAdmin = async (req, res) => {
        const id = req.params.id;

        this.AdminService.deleteAdmin(id)
            .then(response => {
                res.status(200).json(response);
            })
            .catch(err => {
                res.status(404).json({ message: err.message });
            });
    };

}

export default new AdminController();