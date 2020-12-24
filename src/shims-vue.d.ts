/**
 * let typsecript to support .vue file
 */
declare module "*.vue" {
    import { defineComponent } from 'vue';
    const Component: ReturnType<typeof defineComponent>;
    export default Component;
}