<script>
    export default {
        name: "ExampleBox",
        props: ['title'],
        data() {
            return {}
        }
    }
</script>


<template>
    <div id="example-box-container">
        <h2>{{this.title}}</h2>
        <div id="example-box-body">
            <slot></slot>
        </div>
    </div>
</template>


<style lang="scss">
    #example-box-container {
        box-sizing: border-box;

        * { padding-bottom: 8px; }

        h2 {
            box-sizing: border-box;
            background-color: #666666;
            padding: 8px 16px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            color: white;
        }

        #example-box-body {
            border: 2px solid #666666;
            border-top: none;
            padding: 8px 16px;
        }

        .function-header {
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            padding-bottom: 8px;

            span {
                padding-left: 4px;
            }

            * { padding-bottom: 0px !important }

        }

        .function-body {

        }
        .tabbed {
            padding-left: 24px;
        }

        .no-bottom-padding {
            padding-bottom: 0px !important;
        }

    }

</style>