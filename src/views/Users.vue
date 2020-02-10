<script>
    import {getUsers, postUser, putUser, deleteUser} from '../assets/services/services'


    export default {
        name: "Users",
        data() {
            return {

                roles: ['Admin', 'Student Employee', 'Other'],
                headers: [
                    { text: 'First Name', value: 'firstName' },
                    { text: 'Last Name', value: 'lastName' },
                    { text: 'NetID', value: 'netId' },
                    { text: 'Role', value: 'role' },
                    { text: 'Actions', value: 'action', sortable: false, align: 'center'}
                ],
                users: [],
                dialog: false,
                selectedUser: {},
                isEdit: false,
                message: false,
                dialogText: '',
                messageDialog: false
            }
        },
        methods: {
            hideMessageDialog() {
                this.messageDialog = false
            },
            resetDialog() {
                this.selectedUser = {}
                this.isEdit = false
                this.dialog = false
            },
            saveNewUser() {
                postUser(this.selectedUser)
                .then(data => {
                    if(!data) {
                        this.dialogText = 'User is already in the database'
                        this.messageDialog = true
                    }
                    else {
                        this.resetDialog()
                        this.users.push(data)
                    }
                })
            },
            saveEditUser() {
                putUser(this.selectedUser)
                .then(data => {
                    this.resetDialog()
                })
            },
            setEdit(data) {
                this.selectedUser = {...data}
                this.dialog = true
                this.isEdit = true
            },
            showMessage(data) {
                this.message = true
                this.selectedUser = data
            },
            deleteUser() {
                deleteUser(this.selectedUser.id)
                .then(data => {
                    this.message = false
                    const idx = this.users.indexOf(this.selectedUser)
                    this.users.splice(idx, 1)
                })
            }
        },
        mounted() {
            // getUsers().then(data => {
            //     this.users = data
            // })
            // .catch(err => {
            //     const path = handleErr(err)
            //     if(path !== null) this.$router.push(path)
            // })
        }
    }
</script>


<template>
    <v-container>
        <v-data-table
        :headers="headers"
        :items="users"
        style="border: 1px solid lightgrey; border-top: none"
        >
            <template v-slot:top>
                <v-toolbar dark flat color="primary">
                    <v-toolbar-title>Users</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px" persistent>
                        <template v-slot:activator="{ on }">
                            <v-btn text v-on="on" >New User</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>New User</v-card-title>
                            <v-card-text>
                                <v-layout column>
                                    <v-text-field
                                    label="First Name"
                                    v-model="selectedUser.firstName"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                    label="Last Name"
                                    v-model="selectedUser.lastName"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                    label="NetID"
                                    v-model="selectedUser.netId"
                                    >
                                    </v-text-field>
                                    <v-select
                                    label="Role"
                                    v-model="selectedUser.role"
                                    :items="roles"
                                    ></v-select>
                                </v-layout>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn text v-if="!isEdit" @click="saveNewUser" color="primary">Save</v-btn>
                                <v-btn text v-if="isEdit" @click="saveEditUser" color="primary">Save Changes</v-btn>
                                <v-btn color="error" text @click="resetDialog" >Cancel</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.action="{ item }" >
                <v-btn small text icon>
                    <v-icon @click="setEdit(item)" >edit</v-icon>
                </v-btn>
                <v-btn small text icon>
                    <v-icon color="error" @click="showMessage(item)">clear</v-icon>
                </v-btn>
            </template>
        </v-data-table>
        <v-dialog v-model="message" max-width="500px" persistent>
            <v-card>  
                <v-card-title>Are you sure you want to delete this user?</v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="deleteUser" >Yes</v-btn>
                    <v-btn color="error" text @click="() => message = false" >No</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="messageDialog">
            <v-card>  
                <v-card-title>{{dialogText}}</v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="hideMessageDialog">Okay</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>


<style lang="scss">


</style>