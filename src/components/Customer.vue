<template>
    <div>
        <div class="content">
            <div class="search_bar">
                <input type="text" placeholder="Search for a customer, postcode or plant">
                <img src="../assets/search.png" />
            </div>
            <div class="customer_table">
                    <button class="customer_name"  v-for="customer in customers" v-bind="customer" v-bind:key="customer.id" v-on:click="addActiveCustomer(customer)">
                        {{customer.CustomerName}} <br /> {{customer.CustomerAddress}}
                    </button>
            </div>


            <div class="customer_form hide" id="customer_form">
                <form>
                    <img id="cross" v-on:click="classToggle" src="../assets/x-mark-32.png" />
                    <label class="form_field" for="name">Name:  </label>
                    <input class="form_field" type="text" id="name" name="name" required> <br />
                    <label class="form_field" for="email">Email Address:  </label>
                    <input class="form_field" type="text" id="email" name="email" required> <br />
                    <label class="form_field" for="number">Phone Number:  </label>
                    <input class="form_field" type="text" id="number" name="number" maxlength="11" size="11" required>  <br />
                    <label class="form_field" for="address">Address:  </label>
                    <textarea class="form_field" name="address:" id="address" cols="40" rows="5"></textarea> <br />
                    <input class="form_field" type="radio" id="wholesaler" name="wholesaler" value="wholesaler" checked="checked">
                    <label class="form_field" for="wholesaler">  Wholesaler</label><br>
                    <input id="submit_button" type="submit" value="Add New Customer">
                </form>
            </div>
        </div>
        <footer>
            <div class="footer_buttons">
                <a class="button right_button" v-on:click="classToggle">New Customer</a>
                <a class="button left_button" href="">Next</a>
                <div id="selectedCustomerName"></div>
                <div id="selectedCustomerAddress"></div>
            </div>
        </footer>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                customers: null,
                loading: true,
                errored: false,
                customer: null
                //activeCustomer: null,
                //newActiveCustomer: null,
                //selectedCustomer: null
            }
        },
        mounted() {
            
            //localStorage.setItem('customer', JSON.stringify(customer));

            //if (localStorage.getItem('customer')) {
            //    try {
            //        //var activeCustomer = this.activeCustomer;
            //        this.activeCustomer = JSON.parse(localStorage.getIem(customer));

            //    }
            //    catch (e) {
            //        localStorage.removeItem('customer');
            //    }
            //}

            axios
                .get('http://ahillsquoteservice.azurewebsites.net/api/customer/all')
                .then(response => {
                    this.customers = response.data
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true;
                })
                .finally(() => this.loading = false)
        },
        methods: {
            addActiveCustomer(customer) {
                //var activeCustomer = this.activeCustomer;
                document.getElementById("selectedCustomerName").innerHTML = customer.CustomerName;
                document.getElementById("selectedCustomerAddress").innerHTML = customer.CustomerAddress;
                localStorage.setItem("customer", JSON.stringify(customer.CustomerId));
            },

        //        if (!this.customer) {
        //            return;
        //        }

        //        this.customer.push(this.customer);
        //        this.customer = '';
        //        this.saveCustomer();
        //    },
        //    removeCustomer(x) {
        //        this.Customer.splice(x, 1);
        //        this.saveCustomer();
        //    },
        //    saveCustomer() {
        //        const parsed = JSON.stringify(this.customer);
        //        localStorage.setItem('customer', parsed);
        //},
            //persist() {
            //    localStorage.activeCustomer = this.activeCustomer;
            //    console.log('now pretend I did more stuff...');
            //}
            //randomQuote() {

            //    var array = [this.customers];
            //    var cpt = 0 ;

            //    if (cpt < array.length - 1)
            //        cpt++;
            //    else
            //        cpt = 0;

            //    document.querySelector("#selectedCustomer").innerHTML = array[cpt];
            //selectCustomer() {
            //    axios
            //        .get('http://ahillsquoteservice.azurewebsites.net/api/customer/all')
            //        .then(response => {
            //            this.customers = response.data
            //        })

            //},
            classToggle() {
                var element = document.getElementById("customer_form");
                element.classList.toggle("hide");
            },
            //search() {
            //    fetch(
            //        "${this.search}"
            //    )
            //        .then(response => response.json())
            //        .then(data => {
            //            this.result = data.results;
            //            console.log(data);
            //        });
            //}

            //watch: {
            //    activeCustomer(newActiveCustomer) {
            //        localStorage.activeCustomer = newActiveCustomer;
            //    }
            //}
            //created() {
            //    // POST request using axios with error handling will create a new customer
            //    const newCustomer = { CustomerName: this.CustomerName };
            //    axios.post("http://ahillsquoteservice.azurewebsites.net/Help/Api/POST-api-Customer", newCustomer)
            //        .then(response => this.newCustomerId = response.data.id)
            //        .catch(error => {
            //            this.errorMessage = error.message;
            //            console.error("There was an error!", error);
            //        });
            //}
        }
    }
</script>

<style>

    .content {
        max-width: 90%;
        margin: 0 auto;
    }

    .hide {
        display: none;
    }

    #cross {
        top: 20px;
        left: 20px;
        position: absolute;
        max-width: 25px;
    }

    .search_bar {
        margin-top: 30px;
        padding: 4px;
    }

    .customer_table {
        display: grid;
        grid-template-columns: auto auto;
        padding-top: 10px;
        z-index: 0;
    }

    .customer_form {
        z-index: 1;
        position: absolute;
        top: 160px;
        left: 30%;
        background: white;
        border: 1px solid grey;
        border-radius: 5px;
        padding: 80px;
    }

    #submit_button {
        float: right;
        margin-top: 20px;
        color: white;
        background: #A4BF18;
        text-align: center;
        border: none;
        padding: 10px;
        border-radius: 5px;
        text-decoration: none;
    }

    .form_field {
        margin-top: 15px;
    }

    .customer_name {
        font-size: 14px;
        color: #0b3d1b;
        text-align: center;
        border: solid 1px #9fafa5;
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
    }

        .customer_name:hover {
            color: white;
            background: #a4bf18;
            border: solid 1px #9fafa5;
        }

    .search_bar input {
        min-width: 96%;
        height: 23px;
        border-radius: 12px;
        border: 1px solid #9fafa5;
        padding: 2px;
    }

    .search_bar img {
        height: 23px;
        float: right;
        margin-top: 3px;
    }

    .button {
        color: white;
        background: #A4BF18;
        text-align: center;
        width: 300px;
        padding: 10px;
        border-radius: 5px;
        text-decoration: none;
    }

        .button:hover {
            background: #0B3D1B;
        }

    .footer_buttons {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: white;
        min-height: 63px;
        max-height:63px;
        text-align: center;
        box-shadow: 0px -10px 10px #e5e5e5;
    }

    .left_button {
        float: left;
        width: 120px;
        margin-left: 30px;
        margin-top: 12px;
    }

    .right_button {
        float: right;
        width: 120px;
        margin-right: 30px;
        margin-top: 12px;
    }

    #selectedCustomerName {
        text-align: center;
        padding-top: 10px;
    }
</style>

