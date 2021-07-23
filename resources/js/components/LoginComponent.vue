<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header">ログイン</div>

                    <div class="card-body">
                        <form v-on:submit.prevent="login">

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">メールアドレス</label>

                                <div class="col-md-6">
                                    <input type="text" class="form-control" v-bind:class="{'is-invalid': emailError}" name="email" v-model="form.email" autocomplete="Off" autofocus>
                                </div>

                                <div v-if="emailError" class="col-md-6 offset-md-4">
                                    <strong>{{ errors.email[0] }}</strong>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">パスワード</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" v-bind:class="{'is-invalid': passwordError}" name="password" v-model="form.password" autocomplete="Off">
                                </div>

                                <div v-if="passwordError" class="col-md-6 offset-md-4">
                                    <strong>{{ errors.password[0] }}</strong>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-2">
                                    <button type="submit" class="btn btn-dark btn-block">
                                        ログイン
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            emailError: false,
            passwordError: false,
            errors: [],
            form: {
                email: "",
                password: "",
            }
        };
    },
    methods: {
        checkIfAuthenticated() {
            if (localStorage.getItem("auth")) {
                return this.$router.push("/about");
            }
        },
        login() {
            axios.get("/sanctum/csrf-cookie")
                .then(res => {
                    axios.post("/api/login", {
                        email: this.form.email,
                        password: this.form.password,
                    })
                    .then(res => {
                        localStorage.setItem("auth", true);
                        this.$router.push("/about");
                    })
                    .catch(err => {
                        this.errors = err.response.data.errors;
                        err.response.data.errors.email ? this.emailError = true : this.emailError = false;
                        err.response.data.errors.password ? this.passwordError = true : this.passwordError = false;
                    });
                })
        }
    },
    mounted() {
        this.checkIfAuthenticated();
    }
}
</script>