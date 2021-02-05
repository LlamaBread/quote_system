<template>
<div>
    <header>
        <section class="header_cont">
            <img src="../assets/logo.png" />
            <a class="right" href="">Log in</a>
            <nav role="navigation">
                <div id="menuToggle">

                    <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                        <a class="nav_button" href=""><li>Customers</li></a>
                        <a class="nav_button" href=""><li>Stock Table</li></a>
                        <a class="nav_button" href=""><li>Quotes</li></a>
                        <a class="nav_button" href=""><li>Sales Orders</li></a>
                        <a class="nav_button" href=""><li>Picking Lists</li></a>
                        <a class="nav_button" href=""><li>Pricing</li></a>
                        <a class="nav_button" href=""><li>Admin</li></a>
                        <a class="nav_button" href=""><li>Export Batches</li></a>
                    </ul>
                </div>
            </nav>
        </section>
    </header>
</div>
</template>

<script>
export default {

}
</script>

<style>
    * {
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background: white;
    }

    .header_cont {
        margin-top: 15px;
        box-shadow: 0px 10px 10px #e5e5e5;
        height: 63px;
    }

        .header_cont img {
            max-width: 200px;
            margin-left: 80px;
        }

        .header_cont a {
            color: #A4BF18;
            text-decoration: none;
        }

    .right {
        float: right;
        margin-right: 30px;
        margin-top: 12px;
    }

    #menuToggle {
        display: block;
        position: relative;
        top: -45px;
        left: 30px;
        z-index: 1;
        -webkit-user-select: none;
        user-select: none;
    }

        #menuToggle input {
            display: block;
            width: 40px;
            height: 32px;
            position: absolute;
            top: -7px;
            left: -5px;
            cursor: pointer;
            opacity: 0;
            z-index: 2;
            -webkit-touch-callout: none;
        }

        #menuToggle span {
            display: block;
            width: 33px;
            height: 4px;
            margin-bottom: 5px;
            position: relative;
            background: #9FAFA5;
            border-radius: 3px;
            z-index: 1;
            transform-origin: 4px 0px;
            transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease;
        }

            #menuToggle span:first-child {
                transform-origin: 0% 0%;
            }

            #menuToggle span:nth-last-child(2) {
                transform-origin: 0% 100%;
            }

        #menuToggle input:checked ~ span {
            opacity: 1;
            transform: rotate(45deg) translate(-2px, -1px);
            background: #9FAFA5;
        }

            #menuToggle input:checked ~ span:nth-last-child(3) {
                opacity: 0;
                transform: rotate(0deg) scale(0.2, 0.2);
            }

            #menuToggle input:checked ~ span:nth-last-child(2) {
                transform: rotate(-45deg) translate(0, -1px);
            }

    #menu {
        position: absolute;
        font-size: 14px;
        min-height: 600px;
        max-width: 300px;
        margin: -60px 0 0 -50px;
        padding: 50px;
        padding-top: 55px;
        background: #E5E5E5;
        list-style-type: none;
        -webkit-font-smoothing: antialiased;
        transform-origin: 0% 0%;
        transform: translate(-100%, 0);
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    }

    #menuToggle input:checked ~ ul {
        transform: none;
    }

    .nav_button li {
        color: white;
        background: #A4BF18;
        text-align: center;
        width: 300px;
        padding: 10px;
        border-radius: 5px;
        text-decoration: none;
        margin: 10px 0px;
        padding: 10px 0;
        font-size: 16px;
        display: inline-table;
    }

        .nav_button li:hover {
            background: #0B3D1B;
        }
</style>