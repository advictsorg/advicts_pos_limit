/** @odoo-module */
import { _t } from "@web/core/l10n/translation";
import { TransferOrderButton } from "@pos_restaurant/app/control_buttons/transfer_order_button/transfer_order_button";
import { usePos } from "@point_of_sale/app/store/pos_hook";
import { ProductScreen } from "@point_of_sale/app/screens/product_screen/product_screen";
import { Component } from "@odoo/owl";
import { patch } from "@web/core/utils/patch";
import { ErrorPopup } from "@point_of_sale/app/errors/popups/error_popup";
import { NumberPopup } from "@point_of_sale/app/utils/input_popups/number_popup";

patch(TransferOrderButton.prototype, {
    setup() {
        super.setup();
        this.popup = usePos().popup;
    },

    async click() {
        if (this.pos.get_cashier().has_pos_transfer_control === true) {
            this.popup.add(ErrorPopup, {
                title: _t("Transfer Restricted"),
                body: _t("You must be granted access to transfer."),
            });
            return false;
        }

        this.pos.setCurrentOrderToTransfer();
        this.pos.showScreen("FloorScreen");
    },
});