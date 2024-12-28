# -*- coding: utf-8 -*-
# Copyright 2024  Advicts LTD.
# Part of advicts. See LICENSE file for full copyright and licensing details.
#
###############################################################################
from odoo import models


class PosSession(models.Model):
    _inherit = 'pos.session'

    def _loader_params_hr_employee(self):
        """Function to load has_pos_discount_control in pos"""
        result = super()._loader_params_hr_employee()
        result['search_params']['fields'].extend(
            ['has_pos_discount_control', 'has_pos_transfer_control', 'has_pos_remove_control',
             'has_pos_qty_control'])
        return result
