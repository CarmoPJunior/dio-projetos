package br.com.dio.iphone;

import br.com.dio.iphone.interfaces.AparelhoTelefonicoInterface;
import br.com.dio.iphone.interfaces.NavegadorInternet;
import br.com.dio.iphone.interfaces.ReprodutorMusicalInterface;

public class Iphone implements ReprodutorMusicalInterface, AparelhoTelefonicoInterface, NavegadorInternet {

	@Override
	public void exibirPagina(String url) {
		// TODO Auto-generated method stub
	}

	@Override
	public void adicionarNovaAba(String url) {
		// TODO Auto-generated method stub
	}

	@Override
	public void atualizarPagina(String url) {
		// TODO Auto-generated method stub
	}

	@Override
	public void ligar(String numero) {
		// TODO Auto-generated method stub
	}

	@Override
	public void atender() {
		// TODO Auto-generated method stub
	}

	@Override
	public void iniciarCorreioVoz() {
		// TODO Auto-generated method stub
	}

	@Override
	public void tocar() {
		// TODO Auto-generated method stub
	}

	@Override
	public void pausar() {
		// TODO Auto-generated method stub
	}

	@Override
	public void selecionarMusica(String musica) {
		// TODO Auto-generated method stub
	}

}
